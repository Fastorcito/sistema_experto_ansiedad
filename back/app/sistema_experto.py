from enum import Enum
from experta import *

class DiagnosticoPrevio(Enum):
    NO = 0  # no se trató previamente
    SI = 1  # se trató previamente


class AntecedentesFamiliares(Enum):
    NO = 0  # no existen antecedentes familiares
    SI = 1  # existen antecedentes familiares

class Sintomas(Enum):
    ANGUSTIA_ALTA = 0  # angustia mayor a 4
    ANGUSTIA_MEDIA = 1  # angustia mayor a 2
    ANGUSTIA_BAJA = 2  # angustia menor a 2
    APEGO_ALTO = 3  # apego mayor a 3
    APEGO_BAJO = 4  # apego menor a 3
    DIFICULTAD_RESPIRAR_ALTA = 5  # dificultad_respirar mayor a 3
    DIFICULTAD_RESPIRAR_BAJA = 6  # dificultad_respirar menor a 3
    MIEDO_IRRACIONAL_ALTO = 7  # miedo_irracional mayor a 3
    MIEDO_IRRACIONAL_BAJO = 8  # miedo_irracional menor a 3
    TEMOR_REPENTINO_ALTO = 9  # temor_repentino mayor a 3
    TEMOR_REPENTINO_BAJO = 10  # temor_repentino menor a 3
    DIFICULTAD_SOCIAL_ALTA = 11  # dificultad_social mayor a 3
    DIFICULTAD_SOCIAL_BAJA = 12  # dificultad_social menor a 3
    PROBLEMAS_SUEÑO_ALTO = 13  # problemas_sueño mayor a 2
    PROBLEMAS_SUEÑO_BAJO = 14  # problemas_sueño menor a 2
    DIFICULTAD_CONCENTRAR_BAJA = 15 # dificultad_concentrar menor a 2
    DIFICULTAD_CONCENTRAR_ALTA = 16 # dificultad_concentrar mayor a 2

class MiedoEstarSolo(Enum):
    NO = 0
    SI = 1

class PesadillasPorSeparacion(Enum):
    NO = 0
    SI = 1

class MiedoPorSeparacion(Enum):
    NO = 0
    SI = 1

class FracasosHabla(Enum):
    NO = 0
    SI = 1

class MiedoRechazoSocial(Enum):
    NO = 0
    SI = 1

class EvitarSituacionesSociales(Enum):
    NO = 0
    SI = 1

class MiedoTransporte(Enum):
    NO = 0
    SI = 1

class MiedoEspaciosAbiertos(Enum):
    NO = 0
    SI = 1

class MiedoEspaciosCerrados(Enum):
    NO = 0
    SI = 1

class MiedoMultitud(Enum):
    NO = 0
    SI = 1

class AfectaAmbitos(Enum):
    NO = 0
    SI = 1


class Diagnostico(Enum):
    ANSIEDAD_POR_SEPARACION = "Trastorno de ansiedad por separación"
    ANSIEDAD_GENERALIZADA = "Trastorno de ansiedad generalizada"
    FOBIA_SOCIAL = "Trastorno de ansiedad social (fobia social)"
    TRASTORNO_DE_PANICO = "Trastorno de pánico"
    MUTISMO_SELECTIVO = "Transtorno de ansiedad de mutismo selectivo"
    AGORAFOBIA = "Transtorno de agorafobia"
    SIN_DIAGNOSTICO = "No se ha podido diagnosticar"


    


class Diagnosticador(KnowledgeEngine):
    def __init__(self):
        super().__init__()
        print("Inicializando sistema experto...")
        self.diagnostico = []

    # ANSIEDAD POR SEPARACIÓN
    @Rule(Fact(Sintomas.ANGUSTIA_ALTA), Fact(Sintomas.APEGO_ALTO))
    def ansiedad_por_separacion(self):
        self.diagnostico.append(Diagnostico.ANSIEDAD_POR_SEPARACION)

    # ANSIEDAD GENERALIZADA
    @Rule(
        Fact(Sintomas.ANGUSTIA_ALTA),
        OR(
            Fact(Sintomas.DIFICULTAD_RESPIRAR_ALTA),
            Fact(Sintomas.PROBLEMAS_SUEÑO_ALTO),
        ),
        Fact(AntecedentesFamiliares.SI),
    )
    def ansiedad_generalizada(self):
        self.diagnostico.append(Diagnostico.ANSIEDAD_GENERALIZADA)

    # TRASTORNO DE PANICO
    @Rule(
        Fact(Sintomas.ANGUSTIA_MEDIA),
        OR(
            Fact(Sintomas.DIFICULTAD_RESPIRAR_ALTA),
            Fact(Sintomas.TEMOR_REPENTINO_ALTO),
            Fact(DiagnosticoPrevio.SI),
        ),
    )
    def panico(self):
        self.diagnostico.append(Diagnostico.TRASTORNO_DE_PANICO)

    # ANSIEDAD SOCIAL
    @Rule(
        OR(Fact(Sintomas.MIEDO_IRRACIONAL_ALTO)), Fact(Sintomas.DIFICULTAD_SOCIAL_ALTA)
    )
    def ansiedad_social(self):
        self.diagnostico.append(Diagnostico.FOBIA_SOCIAL)

    #MUTISMO SELECTIVO
    @Rule (
        Fact(FracasosHabla.SI), 
        OR(
            Fact(Sintomas.ANGUSTIA_MEDIA),
            Fact(Sintomas.ANGUSTIA_MEDIA)
        )
    )
    def mutismo_selectivo(self):
        self.diagnostico.append(Diagnostico.MUTISMO_SELECTIVO)

    #AGORAFOBIA
    @Rule(
        Fact(Sintomas.MIEDO_IRRACIONAL_ALTO), 
        OR(
            Fact(MiedoTransporte.SI), 
            Fact(MiedoEspaciosAbiertos.SI), 
            Fact(MiedoEspaciosCerrados.SI), 
            Fact(MiedoMultitud.SI) 
        )
    )
    def agarofobia(self) :
        self.diagnostico.append(Diagnostico.AGORAFOBIA)
    # DEFAULT RULE
    @Rule()
    def default(self):
        if not self.diagnostico:
            self.diagnostico = [Diagnostico.SIN_DIAGNOSTICO]

