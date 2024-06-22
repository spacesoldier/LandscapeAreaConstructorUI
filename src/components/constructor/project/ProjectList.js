import {Button, Card, CardBody, CardFooter, CardHeader, Typography} from "@material-tailwind/react";
import {FaPlus} from "react-icons/fa6";
import React, {useEffect, useState} from "react";
import axios from "axios";

function ProjectList({stageUpdateSink, username}){

    const [projects,setProjects] = useState([])


    const retrieveProjectsForUser = async () =>
    {
        const prj_rersponse = await axios.get(`http://localhost:8000/maf/projects/${username}`)
            .then(
                (prj_rersponse) => {
                    const {data} = prj_rersponse;

                    console.log(data);

                    setProjects(data.projects);
                }
            );

    }

    useEffect(() => {
        retrieveProjectsForUser();
    },[])

    return (
        <div className="flex">
            <Card className="mt-6 w-screen">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Проекты пользователя {username}
                    </Typography>
                    <hr className="h-px" />
                    <div className="grid grid-cols-4 h-full pt-8" >
                        <div >
                            <Button
                                variant="outlined"
                                className="h-40 w-80 inline-flex items-center border-4 border-gray-600"
                                onClick={() => stageUpdateSink("new-project")}
                            >
                                <FaPlus className="w-8 h-8"/>
                                <span className="pl-16">
                                    <Typography variant="h5" color="blue-gray">
                                        Начать новый
                                    </Typography>
                                </span>
                            </Button>
                        </div>
                            {projects.map(project => (
                                <Card key={project.project_id} className="h-40 w-80">
                                    <CardBody>
                                        <Typography>
                                            <span>{project.project_id}</span>
                                            <hr className="h-px" />
                                            <span>{project.project_name}</span>
                                        </Typography>
                                    </CardBody>
                                    <CardFooter>

                                    </CardFooter>
                                </Card>
                            ))}

                    </div>
                </CardBody>
                <CardFooter className="pt-0">

                </CardFooter>
            </Card>
        </div>




    );
}

export default ProjectList
