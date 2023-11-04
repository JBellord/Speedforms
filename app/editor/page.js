import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DownloadIcon, UploadCloud } from "lucide-react";

export default function Editor() {
  return (
    <div className="w-full h-screen py-3 px-4 m-0 overflow-hidden space-y-4 flex justify-start items-start flex-col">
        <div className="w-full h-16 p-0 m-0 flex items-center justify-center">
            <div className="rounded-full h-full w-full px-6 py-2 bg-cyan-100 flex items-center justify-between">
                <div>Namespace / <span className="font-bold">Survey Title</span></div>
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
            <div className="p-2 h-full rounded-[25px] w-3/12 bg-cyan-100">A</div>
            <div className="p-2 h-full rounded-[25px] w-6/12 bg-cyan-100">B</div>
            <div className="p-2 h-full rounded-[25px] w-3/12 bg-cyan-100">C</div>
        </div>
    </div>
  )
}