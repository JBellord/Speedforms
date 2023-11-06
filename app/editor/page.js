import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DownloadIcon, Plus, UploadCloud } from "lucide-react";

export default function Editor() {
  return (
    <div className="w-full h-screen py-3 px-4 m-0 overflow-hidden space-y-4 flex justify-start items-start flex-col">
        <div className="w-full h-16 p-0 m-0 flex items-center justify-center">
            <div className="rounded-full h-full w-full px-6 py-2 bg-background border flex items-center justify-between">
                <div className="p-2">Namespace / <span className="font-bold">Survey Title</span></div>
                <div className="flex justify-center items-center space-x-3">
                    <div className="space-x-3 flex justify-center items-center">
                        <Button size="sm" className="px-4">
                            <UploadCloud className="mr-2 h-4 w-4"/>
                            Publish
                        </Button>
                        <Button size="sm" className="px-4">
                            <DownloadIcon className="mr-2 h-4 w-4"/>
                            Export
                        </Button>
                    </div>
                    <Avatar>
                        <AvatarImage src="https://tinyurl.com/AvatarJIO"/>
                        <AvatarFallback>JI</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
        <div className="h-full w-full flex space-x-4 justify-between items-center">
            <div className="p-4 h-full rounded-[25px] w-3/12 bg-background border">
                <div className="p-4 space-y-8">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-xl">Questions</span>
                        <Button className="p-1 h-8 w-8" size="icon" ><Plus className="h-5 w-5"/></Button>
                    </div>
                    <div className="space-y-4">
                        <div className="font-medium flex justify-start items-center space-x-3">
                            <div className="rounded-full p-3 h-6 w-6 text-sm bg-primary text-background border flex flex-nowrap justify-center items-center">1</div>
                            <span className="text-sm flex flex-nowrap">How can we improve our product & service?</span>
                        </div>
                        <div className="font-medium flex justify-start items-center space-x-3">
                            <div className="rounded-full p-3 h-6 w-6 text-sm bg-primary text-background border flex flex-nowrap justify-center items-center">2</div>
                            <span className="text-sm flex flex-nowrap">How can we improve our product & service?</span>
                        </div>
                        <div className="font-medium flex justify-start items-center space-x-3">
                            <div className="rounded-full p-3 h-6 w-6 text-sm bg-primary text-background border flex flex-nowrap justify-center items-center">3</div>
                            <span className="text-sm flex flex-nowrap">How can we improve our product & service?</span>
                        </div>
                        <div className="font-medium flex justify-start items-center space-x-3">
                            <div className="rounded-full p-3 h-6 w-6 text-sm bg-primary text-background border flex flex-nowrap justify-center items-center">4</div>
                            <span className="text-sm flex flex-nowrap">How can we improve our product & service?</span>
                        </div>
                        <div className="font-medium flex justify-start items-center space-x-3">
                            <div className="rounded-full p-3 h-6 w-6 text-sm bg-primary text-background border flex flex-nowrap justify-center items-center">5</div>
                            <span className="text-sm flex flex-nowrap">How can we improve our product & service?</span>
                        </div>
                        <div className="font-medium flex justify-start items-center space-x-3">
                            <div className="rounded-full p-3 h-6 w-6 text-sm bg-primary text-background border flex flex-nowrap justify-center items-center">6</div>
                            <span className="text-sm flex flex-nowrap">How can we improve our product & service?</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2 h-full rounded-[25px] w-6/12 bg-background border">B</div>
            <div className="p-2 h-full rounded-[25px] w-3/12 bg-background border">C</div>
        </div>
    </div>
  )
}