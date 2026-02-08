import Card from "./Card";

function Cards() {

  return (
    <div className="p-10 min-h-screen bg-gray-700 flex flex-col gap-y-3 items-center" >
     <Card 
     title="My Idol"
     description="She attracts the worlds attention!!!" 
     buttonText="vote" />

     <Card
     title="Philosophy"
     description=' "There is no wrong or right just different views "'
     buttonText="I agree"
     />

     <Card
          title="Get a Job"
          description="Use your skills to get hired."
          buttonText="Apply"
        />
      
    </div>
  )
}

export default Cards
