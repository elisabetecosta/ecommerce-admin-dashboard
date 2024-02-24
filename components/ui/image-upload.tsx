"use client";

import { useEffect, useState } from "react";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

import { Button } from "@/components/ui/button";

interface ImageUploadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
};


const ImageUpload: React.FC<ImageUploadProps> = ({
    disabled,
    onChange,
    onRemove,
    value
}) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {

        setIsMounted(true);
    }, []);


    const onUpload = (result: any) => {
        onChange(result.info.secure_url);
    };


    if (!isMounted) return null;


    return (
        <div>
            <div className="mb-4 flex items-center gap-4">
                {value.map((url) => (
                    <div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
                        <div className="z-10 absolute top-2 right-2">
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={() => onRemove(url)}
                            >
                                <Trash className="h-4 w-4" />
                            </Button>
                        </div>

                        <Image 
                            fill
                            alt="Image"
                            src={url}
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            <CldUploadWidget onUpload={onUpload} uploadPreset="jgnznccc">
                    {({ open }) => {

                        const onClick = () => {
                            open();
                        };

                        return (
                            <Button
                                type="button"
                                disabled={disabled}
                                variant="secondary"
                                onClick={onClick}
                            >
                                <ImagePlus className="mr-2 h-4 w-4" />
                                Upload an Image
                            </Button>
                        );
                    }}
            </CldUploadWidget>
        </div>
    );
}

export default ImageUpload;