"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { ColorColumn, columns } from "./columns";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ColorClientProps {
    data: ColorColumn[]
};


const ColorClient: React.FC<ColorClientProps> = ({
    data
}) => {

    const params = useParams();
    const router = useRouter();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Colors (${data.length})`}
                    description="Manage colors for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>
            <Separator />

            <DataTable filterKey="name" columns={columns} data={data} />

            <Heading title="API" description="API calls for Colors" />
            <Separator />

            <ApiList entityName="colors" entityIdName="colorId" />
        </>
    );
}

export default ColorClient;