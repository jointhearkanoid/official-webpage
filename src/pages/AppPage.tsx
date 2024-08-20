export default function AppPage() {
  return (
    <div className="mt-20 flex flex-col m-10">
      <div>
        <h1 className="text-gray-500 text-6xl font-bold">Join the #NextGen.</h1>
      </div>
      <div>
        <h1 className="text-white text-6xl font-bold">
          Meet the renewed ArkanoidOS.
        </h1>
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-white">
          Aunque parezca que andamos desaparecidos, siempre estamos innovando
          para ofrecerte una experiencia Windows centrada en ti como usuario.
        </p>
        <p className="text-white">
          Queremos que puedas desbloquear el máximo potencial de tu PC para tus
          tareas diarias (y las no tan diarias).
        </p>
        <p className="text-white">
          Por eso, nuestra página se renueva para seguir ofreciéndote una
          experiencia Windows ligera, altamente personalizable, rápida,
          portable, rica en funciones, amplia en versiones y, sobre todo,
          orientada al usuario final.
        </p>
        <p className="text-white">
          Conoce al renovado ArkanoidOS, el proyecto de Windows modificado que
          sigue mejorando para motivarte a que tú también lo hagas.
        </p>
      </div>

      <button
        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl w-full"
        type="button"
      >
        Descargar el nuevo ArkanoidOS
      </button>
    </div>
  );
}
