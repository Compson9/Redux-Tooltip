"use client"
import { decrement, increment } from "@/store/slices/counterSlice"
import { RootState } from "@/store/store"
import { Minus, Plus } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"


export default function Counter() {
  const  counter = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    const handleincrement = () => {
        dispatch(increment())
    }
    const handledecrement = () => {
        dispatch(decrement())
    }

    
    return (
        <div className="max-w-3xl flex flex-col justify-center items-center mx-auto ">
            <h2 className="scroll-m-20 text-4xl text-white font-semibold tracking-tight first:mt-0">
                Redux Counter
            </h2>
            <div className="py-10 ">
                <div className="flex items-center justify-center space-x-4">
                    <button onClick={handledecrement}>
                        <Minus color="white" size={40} />
                    </button>
                    <p className="text-[30px] text-white">{counter}</p>
                    <button onClick={handleincrement}>
                        <Plus color="white" size={40} />
                    </button>
                </div>
            </div>
        </div>
    )
}
