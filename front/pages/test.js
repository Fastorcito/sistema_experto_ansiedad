import NextLink from 'next/link'
import { useState } from 'react';



const diagnostic_description = {
  "Trastorno de ansiedad por separación": "Ansiedad excesiva por separarse de personas significativas o del hogar, con síntomas como angustia, preocupación por perder a los seres queridos, resistencia a ir a lugares sin ellos, pesadillas y quejas físicas recurrentes.",
  "Trastorno de ansiedad generalizada": "Ansiedad y preocupación excesiva sin control, con síntomas como dificultad para controlar la preocupación, inquietud, fatiga, dificultad para concentrarse, irritabilidad y malestar significativo en áreas importantes del funcionamiento.",
  "Trastorno de ansiedad social (fobia social)": "Miedo intenso o ansiedad en situaciones sociales donde se teme ser juzgado o avergonzado, con síntomas como temor persistente, evitación de situaciones sociales, dificultades en las relaciones sociales, ansiedad anticipatoria y reconocimiento de que el miedo es irracional.",
  "Trastorno de pánico": "Ataques de pánico recurrentes e inesperados, con síntomas como miedo intenso, palpitaciones, sudoración, dificultad para respirar, opresión en el pecho, mareos, miedo a perder el control o morir, y cambios en el comportamiento para evitar los ataques o situaciones desencadenantes.",
  "Transtorno de ansiedad de mutismo selectivo": "Es un trastorno de ansiedad donde la persona no puede hablar en ciertas situaciones sociales, a pesar de poder hacerlo en otros entornos. Se debe a la ansiedad social y se trata con terapia cognitivo-conductual.",
  "Trastorno de agorafobia": "Se caracteriza por un miedo intenso a situaciones donde escapar puede ser difícil o embarazoso, como espacios abiertos o multitudes. Puede limitar severamente la vida diaria de la persona. El tratamiento implica terapia y exposición gradual a las situaciones temidas.",
  "No se ha podido diagnosticar": "",
}

const fields = [
  {
    labelText: '¿Alguno de tus familiares ha sufrido de ansiedad?',
    selectId: 'antecedentes_familiares',
    selectName: 'antecedentes_familiares',
    selectOptions: ['', 'Sí', 'No'],
  },
  {
    labelText: '¿Alguna vez has recibido tratamiento psicológico?',
    selectId: 'diagnostico_previo',
    selectName: 'diagnostico_previo',
    selectOptions: ['', 'Sí', 'No'],
  },
  {
    labelText: '¿Cómo calificarías la angustia que sufres día a día?',
    selectId: 'angustia',
    selectName: 'angustia',
    selectOptions: ['', 'Severa', 'Moderada', 'Leve'],
  },
  {
    labelText: '¿Sientes necesidad de estar con una persona?',
    selectId: 'apego',
    selectName: 'apego',
    selectOptions: ['', 'Constante', 'Ocasional'],
  },
  {
    labelText: '¿Cuán a menudo sientes miedo?',
    selectId: 'miedo_irracional',
    selectName: 'miedo_irracional',
    selectOptions: ['', 'Frecuente', 'Infrecuente'],
  },
  {
    labelText: '¿Sientes temor de la nada?',
    selectId: 'temor_repentino',
    selectName: 'temor_repentino',
    selectOptions: ['', 'Frecuente', 'Infrecuente'],
  },
  {
    labelText: '¿Cuál es tu nivel de dificultad para hablar con la gente?',
    selectId: 'dificultad_social',
    selectName: 'dificultad_social',
    selectOptions: ['', 'Alta', 'Baja'],
  },
  {
    labelText: '¿Tienes problemas de sueño?',
    selectId: 'problemas_sueño',
    selectName: 'problemas_sueño',
    selectOptions: ['', 'Recurrentes', 'Ocasionales'],
  },
  {
    labelText: '¿Se te dificulta respirar cuando estas estresado?',
    selectId: 'dificultad_respiratoria',
    selectName: 'dificultad_respiratoria',
    selectOptions: ['', 'Frecuente', 'Infrecuente'],
  },
  {
    labelText: '¿Qué nivel de dificultad tienes a la hora de concentrarte?',
    selectId: 'dificultad_concentrar',
    selectName: 'dificultad_concentrar',
    selectOptions: ['', 'Alta', 'Baja'],
  },
  {
    labelText: '¿Tienes miedo a estar solo?',
    selectId: 'miedo_soledad',
    selectName: 'miedo_soledad',
    selectOptions: ['', 'Sí', 'No'],
  },
  {
    labelText: '¿Tienes pesadillas recurrentes?',
    selectId: 'pesadilla_separacion',
    selectName: 'pesadilla_separacion',
    selectOptions: ['', 'Sí', 'No'],
  },
  {
    labelText: '¿Tienes miedo a que una persona se separe de tí?',
    selectId: 'miedo_separacion',
    selectName: 'miedo_separacion',
    selectOptions: ['', 'Sí', 'No'],
  },
  {
    labelText: '¿Se te dificulta hablar en público?',
    selectId: 'fracaso_hablar',
    selectName: 'fracaso_hablar',
    selectOptions: ['', 'Sí', 'No'],
  },
  {
    labelText: '¿Tienes miedo a ser rechazado?',
    selectId: 'miedo_rechazo',
    selectName: 'miedo_rechazo',
    selectOptions: ['', 'Sí', 'No'],
  },
  {
    labelText: '¿Presenta algún grado de temor en los transportes públicos?',
    selectId: 'miedo_transporte',
    selectName: 'miedo_transporte',
    selectOptions: ['', 'Sí', 'No'],
  },
  {
    labelText: '¿Presenta algún grado de temor en espacios abiertos?',
    selectId: 'miedo_espacios_abiertos',
    selectName: 'miedo_espacios_abiertos',
    selectOptions: ['', 'Sí', 'No'],
  },
  {
    labelText: '¿Presenta algún grado de temor en espacios cerrados?',
    selectId: 'miedo_espacios_cerrados',
    selectName: 'miedo_espacios_cerrados',
    selectOptions: ['', 'Sí', 'No'],
  },
  {
    labelText: '¿Tiene miedo a las multitudes?',
    selectId: 'miedo_multitud',
    selectName: 'miedo_multitud',
    selectOptions: ['', 'Sí', 'No'],
  },
]

const parseBody = (input) => {
  return {
    "antecedentes_familiares": input.antecedentes_familiares === "Sí" ? "SI" : "NO",
    "diagnostico_previo": input.diagnostico_previo === "Sí" ? "SI" : "NO",
    
    "sintomas": {
      "angustia": input.angustia === "Severa" ? "ANGUSTIA_ALTA" : ("Moderada" ? "ANGUSTIA_MEDIA" : "ANGUSTIA_BAJA"),
      "apego": input.apego === "Constante" ? "APEGO_ALTO" : "APEGO_BAJO",
      "dificultad_respiratoria": input.dificultad_respiratoria === "Frecuente" ? "DIFICULTAD_RESPIRAR_ALTA" : "DIFICULTAD_RESPIRAR_BAJA",
      "miedo_irracional": input.miedo_irracional === "Infrecuente" ? "MIEDO_IRRACIONAL_BAJO" : "MIEDO_IRRACIONAL_ALTO",
      "temor_repentino": input.temor_repentino === "Infrecuente" ? "TEMOR_REPENTINO_BAJO" : "TEMOR_REPENTINO_ALTO",
      "problemas_sueño": input.problemas_sueño === "Recurrentes" ? "PROBLEMAS_SUEÑO_ALTO" : "PROBLEMAS_SUEÑO_BAJO",
      "dificultad_social": input.dificultad_social === "Alta" ? "DIFICULTAD_SOCIAL_ALTA" : "DIFICULTAD_SOCIAL_BAJA",
      "dificultad_concentrar": input.dificultad_concentrar === "Alta" ? "DIFICULTAD_CONCENTRAR_ALTA" : "DIFICULTAD_CONCENTRAR_BAJA",
      "miedo_soledad": input.miedo_soledad === "Sí" ? "MIEDO_SOLEDAD" : "SIN_MIEDO_SOLEDAD",
      "pesadilla_separacion": input.pesadilla_separacion === "Sí" ? "PESADILLA_SEPARACION" : "SIN_PESADILLA_SEPARACION",
      "miedo_separacion": input.miedo_separacion === "Sí" ? "MIEDO_SEPARACION" : "SIN_MIEDO_SEPARACION",
      "fracaso_hablar": input.fracaso_hablar === "Sí" ? "FRACASO_HABLAR" : "SIN_FRACASO_HABLAR",
      "miedo_rechazo": input.miedo_rechazo === "Sí" ? "MIEDO_RECHAZO" : "SIN_MIEDO_RECHAZO",
      "miedo_transporte": input.miedo_transporte === "Sí" ? "MIEDO_TRANSPORTE" : "SIN_MIEDO_TRANSPORTE",
      "miedo_espacios_abiertos": input.miedo_espacios_abiertos === "Sí" ? "MIEDO_ESPACIOS_ABIERTOS" : "SIN_MIEDO_ESPACIOS_ABIERTOS",
      "miedo_espacios_cerrados": input.miedo_espacios_cerrados === "Sí" ? "MIEDO_ESPACIOS_CERRADOS" : "SIN_MIEDO_ESPACIOS_CERRADOS",
      "miedo_multitud": input.miedo_multitud === "Sí" ? "MIEDO_MULTITUD" : "SIN_MIEDO_MULTITUD"
    }


  }
}

const showDiagnostics = (diagnostics) => {
  let array = diagnostics.split(", ")
  console.log(array)
  return (
    array.map(d => {
      return (
        <>
          <div className="flex justify-center">
            <h2 className='mt-10 font-semibold'>{d}</h2>
          </div>
          <div className="flex justify-center mt-10">
            <div className="w-1/2 mx-auto text-center">
              <h4>{diagnostic_description[d]}</h4>
            </div>
          </div>
        </>
      )
    }
    )
  );
}

const DiagnosticResult = ({ result }) => {
  return (
    <div className="mx-auto">
      <div className="flex justify-center">
        <h1 className="text-xl font-bold leading-7 text-gray-900">Resultado del diagnóstico</h1>
      </div>
      {/* <div className="flex justify-center">
        <h2>{result["diagnóstico"]}</h2>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-1/2 mx-auto text-center">
          <h4>{diagnostic_description[result["diagnóstico"]]}</h4>
        </div>
      </div> */}
      {showDiagnostics(result["diagnóstico"])}
      <div className="flex justify-center mt-10">
        <NextLink
          href="/home"
          className="rounded-md bg-teal-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900"
        >
          Volver
        </NextLink>
      </div>
    </div>
  );
};


export default function Test() {
  const [formData, setFormData] = useState({});
  const [diagnosticResult, setDiagnosticResult] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let requestBody = JSON.stringify(parseBody(formData))
    console.log(requestBody)

    // Send the HTTP POST request with the form data
    fetch('http://127.0.0.1:8000/diagnostico', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      })
      .then(data => {
        console.log(data);
        setDiagnosticResult(data);
      })
      .catch((error) => {
        console.error('Error occurred while sending form data:', error);
      });
  };

  function createSelectField({ labelText, selectId, selectName, selectOptions }) {
    return (
      <div key={selectId} className="sm:col-span-3">
        <label htmlFor={selectId} className="block text-sm font-bold leading-6 text-gray-900">
          {labelText}
        </label>
        <div className="mt-1 relative">
          <select
            id={selectId}
            key={selectId}
            name={selectName}
            autoComplete="country-name"
            className="block w-full rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-red-600 sm:text-sm"
            onChange={handleInputChange}
            required
          >
            {selectOptions.map(option => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414zM5 11a1 1 0 100 2h10a1 1 0 100-2H5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function renderSelectFields(fieldsArray) {
    return fieldsArray.map(field => createSelectField(field));
  }

  return (
    <div className="flex justify-center">
      {diagnosticResult ? (
        <DiagnosticResult result={diagnosticResult} />
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="space-y-12 ">
          <img src="EscudoCato.png" alt="Imagen"   width={400}/>
            <div className="border-b border-gray-900/10 pb-12">
              <h1 className="text-3xl font-extrabold leading-9 text-teal-800 sm:text-4xl sm:leading-10">Sistema experto para diagnóstico de ansiedad</h1>
              <p className="mt-1 text-xl leading-6 text-gray-600">Complete los siguientes campos</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                {renderSelectFields(fields)}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-16">
            <NextLink
              href="home"
            >
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900
              rounded-md bg-red-300 px-3 py-2
              text-sm font-semibold text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Cancelar
              </button>
            </NextLink>
            <button
              className="text-sm font-semibold leading-6 text-gray-900
              rounded-md bg-green-300 px-3 py-2
              text-sm font-semibold text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Diagnosticar
            </button>
          </div>

        </form>
      )}
    </div>
  )
}