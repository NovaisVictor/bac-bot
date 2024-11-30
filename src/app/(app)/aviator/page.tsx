import SignalComponent from './signal'

export default function Aviator() {
  return (
    <div className="h-screen flex flex-col gap-12 overflow-x-hidden">
      <div className="">
        <SignalComponent />
      </div>
      <div className="h-full">
        <iframe
          className="h-full w-full"
          // style="height: 600px; border-radius: 25px; box-shadow: 0 0 31px -4px black;  border-width: 1px;"
          src="https://go.aff.sortenabet.com/tf9esqb9?utm_campaign=app&utm_content=luiz"
        />
      </div>
    </div>
  )
}
