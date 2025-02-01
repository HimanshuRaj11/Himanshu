"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from "next/link";

export function Projectcard({ project }: { project: any }) {
    return (
        <CardContainer className="inter-var m-4 cursor-pointer">
            <CardBody className=" bg-gradient-to-r from-green-600 via-green-700 to-green-800 relative group/card h-[35em] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                    {project.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className=" text-sm max-w-sm mt-2 text-neutral-300 h-[22%]"
                >
                    {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 shadow-2xl">
                    <Image
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">

                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.link}
                        target="__blank"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Visit →
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
