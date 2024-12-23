import {Minus, Plus} from "lucide-react"

export default function Counter() {
    return (
        <div className="max-w-3xl mx-auto ">
            <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0">
                Redux Counter
            </h2>
            <div className="py-4 ">
                <div className="flex flex-row items-center justify-center space-x-4">
                  <button>
                    <Minus/>
                  </button>
                  <p>0</p>
                  <button>
                    <Plus/>
                  </button>
                </div>
            </div>
        </div>
    )
}
