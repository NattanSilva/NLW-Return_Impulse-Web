import { CloseButton } from "../../CloseButton";

interface FeedbackSucessStepProps {
  onFeedbackRestartRequested: () =>void;
}

export function FeedbackSucessStep({ 
  onFeedbackRestartRequested 
}: FeedbackSucessStepProps) {
  return(
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src="src/assets/sucess.svg" alt="V de sucesso" />

        <span className="text-xl mt-2">Agradecemos seu feedback!</span>

        <button
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          onClick={ onFeedbackRestartRequested }
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}