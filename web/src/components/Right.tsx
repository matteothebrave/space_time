export default function Right() { 
    return(
        <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px] ">
            You didn't registered a memory{' '}
            <a href="" className="underline hover:text-gray-50">register one now!</a>!
          </p>
        </div>
      </div>
    )
}