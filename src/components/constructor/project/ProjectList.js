import {Button, Card, CardBody, CardFooter, Typography} from "@material-tailwind/react";
import {FaPlus} from "react-icons/fa6";
import React from "react";

function ProjectList({stageUpdateSink, username}){

    return (
        <Card className="mt-6 w-96">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Projects
                </Typography>
                <Typography>
                    all existing projects for the user {username}
                </Typography>
                <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

                </ul>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    className="inline-flex items-center"
                    onClick={() => stageUpdateSink("new-project")}
                >
                    <FaPlus className="w-4 h-4"/>
                    <span className="pl-4">New Project</span>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProjectList
