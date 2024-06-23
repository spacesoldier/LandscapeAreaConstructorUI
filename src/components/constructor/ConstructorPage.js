import React from "react";
import SimpleCard from "./elements/SimpleCard";
import {FeaturedImageGallery} from "./elements/ImageGallery";
import {SidebarWithCta} from "./elements/SidebarWithCta";
import {SystemNavbar} from "./elements/SystemNavbar";
import {Badge, Button, Card, CardBody, CardFooter, Typography} from "@material-tailwind/react";
import {FaCalculator, FaCheck, FaList, FaPlus} from "react-icons/fa6";
import ProjectList from "./project/list/ProjectList";
import DefineProjectContent from "./project/draft/DefineProjectContent";
import ProjectReport from "./project/report/ProjectReport";
// import { useKeycloak } from "@react-keycloak/web";

function ConstructorPage(){

    // const { keycloak, initialized } = useKeycloak();

    const curr_username = "architect"

    const [currentStage,setCurrentStage] = React.useState("projects");

    const updateStage = (newStage) => {
        setCurrentStage(newStage);
    }

    const page_selector = {
        "projects": (stageSink) => {
            return (
                <ProjectList username={curr_username} stageUpdateSink={stageSink} />
            );
        },
        "new-project": (stageSink) => {
            return (
                <DefineProjectContent stageUpdateSink={stageSink}/>
            );
        },
        "project-overview": (stageSink) =>{
            return (
                <ProjectReport stageUpdateSink={stageSink}/>
            );
        }
    }

    return (
        <div className="App h-full">
            <SystemNavbar />

            <section className="flex grow h-[calc(90%)]">
                {page_selector[currentStage](updateStage)}
            </section>
        </div>
    );
}

export default ConstructorPage
