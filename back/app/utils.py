from enum import Enum
from typing import Dict
from pydantic import BaseModel, Field

from sistema_experto import Sintomas


class DiagnosticoPrevio(str, Enum):
    NO = "NO"
    SI = "SI"



class AntecedentesFamiliares(str, Enum):
    NO = "NO"
    SI = "SI"


class DiagnosticoRequest(BaseModel):
    antecedentes_familiares: AntecedentesFamiliares = Field(..., example="SI")
    diagnostico_previo: DiagnosticoPrevio = Field(..., example="NO")
    sintomas: Dict[str, str] = Field(..., example={
                                                    "angustia": "ANGUSTIA_ALTA",
                                                    "apego": "APEGO_BAJO",
                                                    "dificultad_respiratoria": "DIFICULTAD_RESPIRAR_ALTA",
                                                    "miedo_irracional": "MIEDO_IRRACIONAL_BAJO",
                                                    "temor_repentino": "TEMOR_REPENTINO_BAJO",
                                                    "problemas_sueño": "PROBLEMAS_SUEÑO_BAJO",
                                                    "dificultad_social": "DIFICULTAD_SOCIAL_ALTA",
                                                    "dificultad_concentrar": "DIFICULTAD_CONCENTRAR_ALTA",
                                                    "miedo_soledad": "MIEDO_SOLEDAD",
                                                    "pesadilla_separacion": "PESADILLA_SEPARACION",
                                                    "miedo_separacion": "MIEDO_SEPARACION",
                                                    "fracaso_hablar": "FRACASO_HABLAR",
                                                    "miedo_rechazo": "MIEDO_RECHAZO",
                                                    "miedo_transporte": "MIEDO_TRANSPORTE",
                                                    "miedo_espacios_abiertos": "MIEDO_ESPACIOS_ABIERTOS",
                                                    "miedo_espacios_cerrados": "MIEDO_ESPACIOS_CERRADOS",
                                                    "miedo_multitud": "MIEDO_MULTITUD",
                                                })


def obtener_sintoma(nombre_sintoma):
    sintoma = ""
    for s in Sintomas:
        if s.name == nombre_sintoma:
            sintoma = s
            break
    return sintoma


def obtener_diagnostico_previo(nombre_diagnostico_previo):
    diagnostico_previo = ""
    for d in DiagnosticoPrevio:
        if d.name == nombre_diagnostico_previo:
            diagnostico_previo = d
            break
    return diagnostico_previo



def obtener_antecedentes(nombre_antecedentes):
    antecedentes = ""
    for a in AntecedentesFamiliares:
        if a.name == nombre_antecedentes:
            antecedentes = a
            break
    return antecedentes