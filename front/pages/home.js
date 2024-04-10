import { AcademicCapIcon } from '@heroicons/react/20/solid'
import NextLink from 'next/link'

const features = [
  {
    name: 'Resultados precisos y confiables:',
    description:
      'Nuestro test de ansiedad ha sido desarrollado para ofrecer una evaluación completa y sensible a los síntomas.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Optimiza tus diagnósticos:',
    description: 'Ofrece un análisis profundo y fiable, a traves de un sistema experto.',
    icon: AcademicCapIcon,
  },
  
]


export default function Home() {
  return (
    <div className="overflow-hidden py-20 rounded-3xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-3xl font-extrabold leading-9 text-teal-800 sm:text-4xl sm:leading-10">Test de trastornos de ansiedad</p>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 flex">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-6 text-lg leading-8 text-gray-600">
              ¿Estás listo para llevar tus diagnósticos de trastornos de ansiedad al siguiente nivel? 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-teal-900" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <NextLink
                  href="test"
                  className="rounded-md bg-green-300  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Comenzar evaluación
                </NextLink>
              </div>
            </div>
          </div>
          <img
            src="anxiety-illustration.png"
            alt="Product screenshot"
            className="w-[35rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-900/10 md:-ml-4 lg:-ml-0"
            width={1000}
          />
        </div>
      </div>
    </div>
  )
}
