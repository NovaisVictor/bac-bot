import { Button } from '@/components/ui/button'

export default function FirstDeposit() {
  return (
    <div className="h-screen flex flex-col gap-12">
      <div className="text-center">
        <h1 className="text-xl font-bold">
          Registre-se na <span className="text-primary">Sorte na Bet:</span>
        </h1>
      </div>

      <div className="h-full  flex justify-center">
        <iframe
          className="h-full w-11/12"
          // style="height: 600px; border-radius: 25px; box-shadow: 0 0 31px -4px black;  border-width: 1px;"
          src="https://go.aff.sortenabet.com/tf9esqb9?utm_campaign=app&utm_content=luiz"
          sandbox="allow-same-origin allow-scripts allow-forms"
        />
      </div>
      <div className="space-y-4 px-10">
        <Button className="w-full uppercase py-8">Concluir Deposito</Button>
        <Button className="w-full uppercase py-8 bg-destructive">
          Não quero depositar agora
        </Button>
      </div>
    </div>
  )
}
