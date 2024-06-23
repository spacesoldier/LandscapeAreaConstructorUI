import {Button, Card, CardBody, CardFooter, Typography} from "@material-tailwind/react";
import {FaCalculator, FaPlus} from "react-icons/fa6";
import React, {useState} from "react";
import ProjectCard from "../list/ProjectCard";

function DefineProjectContent({stageUpdateSink, username}){

    const [areas, setAreas] = useState([])

    const config = {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${keycloak_token}`
        }
    }

    const prepareProjectContent = async () => {

    }




    return (
            <div className="flex grow flex-row gap-4 pl-2 pr-2 ">
                    <Card className="mt-6 w-full basis-2/3 shadow-lg pl-2">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Список территорий благоустройства
                            </Typography>
                            <hr className="h-px" />
                            <div className="grid grid-cols-4 h-full pt-8" >

                                {
                                    areas.map(
                                        area => (
                                            console.log(area)
                                            // <ProjectCard project_data={project} />
                                        )
                                    )
                                }

                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">

                        </CardFooter>
                    </Card>
                {/*</div>*/}

                {/*// <div className="basis-1/3 shadow-lg pr-2 h-full">*/}

                    <Card className="mt-6 w-full basis-1/3 shadow-lg pr-2">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Состав проекта
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

                </div>




                // </div>

        // </div>



    );
}

export default DefineProjectContent

