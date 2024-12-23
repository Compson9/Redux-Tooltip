import { Minus, Plus } from "lucide-react"

export default function Counter() {
    return (
        <div className="max-w-3xl flex flex-col justify-center items-center mx-auto ">
            <h2 className="scroll-m-20 text-4xl text-white font-semibold tracking-tight first:mt-0">
                Redux Counter
            </h2>
            <div className="py-10 ">
                <div className="flex items-center justify-center space-x-4">
                    <button >
                        <Minus color="white" size={40} />
                    </button>
                    <p className="text-[30px] text-white">0</p>
                    <button>
                        <Plus color="white" size={40} />
                    </button>
                </div>
            </div>
        </div>
    )
}
