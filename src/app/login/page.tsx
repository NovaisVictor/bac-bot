import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { loginAction } from './actions'
import Image from 'next/image'

export default function Login() {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-12 px-20">
      <Image src={'/LOGO.png'} width={200} height={80} alt="" />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Insira seu e-mail para entrar no app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={loginAction} className="space-y-4">
            <Input name="email" type="email" required placeholder="email..." />
            <Button className="w-full" type="submit">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
