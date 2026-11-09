import { Button } from "./Button";

interface ErrorMessageProps {
    message: string;
    onRetry?: ()=> void;
    className?: string;
}

export function ErrorMessage({
    
    message,
    onRetry,
    className="",
}: ErrorMessageProps){
  return(
    <div className={`flex flex-col items-center justify-center
        rounded-xl border border-border
        bg-surface px-6 py-12 text-center ${className}`}>
        <p className="mt-2 max-w-md text-sm leading-6 text-text-secondary">{message}</p>
        <Button onClick={onRetry}>
            Retry
        </Button>
    </div>
  )
}
