import {Button, Card, CardBody, CardFooter, Typography} from "@material-tailwind/react";
import {FaCalculator} from "react-icons/fa6";
import React from "react";

function DefineProjectContent({stageUpdateSink, username}){

    return (

        <Card className="mt-6 w-96">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Create new project
                </Typography>
                <Typography>
                    choose areas for develop
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    className="inline-flex items-center"
                    onClick={() => stageUpdateSink("project-overview")}
                >
                    <FaCalculator className="w-4 h-4"/>
                    <span className="pl-4">Calc project</span>
                </Button>
            </CardFooter>
        </Card>

    );
}

export default DefineProjectContent

