import MenuIcon from "@/ui/Icons/Menu";
import CardContainer from "../../../ui/Containers/Card";
import EventText from "@/ui/Text/Event";
import EventIndicator from "../Indicators/EventIndicator";

function RecentBuildCard() {
  return (
    <CardContainer className=" w-full md:w-[450px] text-dark-v-1 dark:text-light-v-1">
      <div className=" flex justify-between">
        <h4 className=" text-lg font-medium">Recent Builds</h4>
        <button>
          <MenuIcon />
        </button>
      </div>

      <div className=" mt-5 grid  gap-4">
        <div>
          <div className=" flex items-center mb-1 justify-between">
            <p className=" text-lg">Backend Deployment</p>
            <EventText event="Completed">Completed</EventText>
          </div>
          <EventIndicator event="Completed" />
        </div>
        <div>
          <div className=" flex items-center mb-1 justify-between">
            <p className=" text-lg">Scripts Automation</p>
            <EventText event="Failed">Failed</EventText>
          </div>
          <EventIndicator event="Failed" />
        </div>
        <div>
          <div className=" flex items-center mb-1 justify-between">
            <p className=" text-lg">Image Compression</p>
            <EventText event="Progress">In Progress</EventText>
          </div>
          <EventIndicator event="Progress" />
        </div>
      </div>
    </CardContainer>
  );
}

export default RecentBuildCard;
