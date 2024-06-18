import { useState } from "react";

const idiom = [
  {
    idiom: "A blessing in disguise",
    meaning: "a good thing that seemed bad at first",
  },
  { idiom: "A dime a dozen", meaning: "Something common" },
  {
    idiom: "Beat around the bush",
    meaning: "Avoid saying what you mean, usually because it is uncomfortable",
  },
  {
    idiom: "Better late than never",
    meaning: "Better to arrive late than not to come at all",
  },
  {
    idiom: "Bite the bullet",
    meaning: "To get something over with because it is inevitable",
  },
  { idiom: "Break a leg", meaning: "Good luck" },
  { idiom: "Call it a day", meaning: "Stop working on something" },
  { idiom: "Cut somebody some slack", meaning: "Don't be so critical" },
  {
    idiom: "Cutting corners",
    meaning: "Doing something poorly in order to save time or money",
  },
  { idiom: "Easy does it", meaning: "Slow down" },
  { idiom: "Get out of hand", meaning: "Get out of control" },
  {
    idiom: "Get something out of your system",
    meaning: "Do the thing you've been wanting to do so you can move on",
  },
  { idiom: "Get your act together", meaning: "Work better or leave" },
  {
    idiom: "Give someone the benefit of the doubt",
    meaning: "Trust what someone says",
  },
  { idiom: "Go back to the drawing board", meaning: "Start over" },
  { idiom: "Hang in there", meaning: "Don't give up" },
  { idiom: "Hit the sack", meaning: "Go to sleep" },
  { idiom: "It's not rocket science", meaning: "It's not complicated" },
  {
    idiom: "Let someone off the hook",
    meaning: "To not hold someone responsible for something",
  },
  { idiom: "Make a long story short", meaning: "Tell something briefly" },
  { idiom: "Miss the boat", meaning: "It's too late" },
  { idiom: "No pain, no gain", meaning: "You have to work for what you want" },
  { idiom: "On the ball", meaning: "Doing a good job" },
  { idiom: "Pull someone's leg", meaning: "To joke with someone" },
  { idiom: "Pull yourself together", meaning: "Calm down" },
  { idiom: "So far so good", meaning: "Things are going well so far" },
  {
    idiom: "Speak of the devil",
    meaning: "The person we were just talking about showed up!",
  },
  { idiom: "That's the last straw", meaning: "My patience has run out" },
  { idiom: "The best of both worlds", meaning: "An ideal situation" },
  {
    idiom: "Time flies when you're having fun",
    meaning: "You don't notice how long something lasts when it's fun",
  },
  { idiom: "To get bent out of shape", meaning: "To get upset" },
  { idiom: "To make matters worse", meaning: "Make a problem worse" },
  { idiom: "Under the weather", meaning: "Sick" },
  {
    idiom: "We'll cross that bridge when we come to it",
    meaning: "Let's not talk about that problem right now",
  },
  {
    idiom: "Wrap your head around something",
    meaning: "Understand something complicated",
  },
  { idiom: "You can say that again", meaning: "That's true, I agree" },
  { idiom: "Your guess is as good as mine", meaning: "I have no idea" },
  { idiom: "Chuffed to bits", meaning: "Very pleased" },
  { idiom: "Bits and bobs", meaning: "Various items" },
  {
    idiom: "Throw a spanner in the works",
    meaning:
      "To prevent something from happening smoothly or to bring a plan to a halt",
  },
  { idiom: "Brass monkeys", meaning: "Very cold weather" },
  { idiom: "Bob’s your uncle!", meaning: "There you have it” or “ta-da!" },
  { idiom: "Gutted", meaning: "Feeling extremely upset or disappointed" },
  { idiom: "Knackered", meaning: "Exhausted" },
  { idiom: "Cream crackered", meaning: "Extremely tired or exhausted" },
  { idiom: "Have a gander", meaning: "Take a look" },
  {
    idiom: "Lost the plot",
    meaning: "Lost the ability to cope or behave rationally",
  },
  { idiom: "Throw a wobbly", meaning: "Become very angry or throw a tantrum" },
  { idiom: "Chinwag", meaning: "A good chat or gossip with someone" },
  { idiom: "Curtain twitcher", meaning: "A nosey neighbor or friend" },
  { idiom: "Full of beans", meaning: "Lively or full of energy" },
  { idiom: "Chockablock", meaning: "Crammed full or crowded" },
  { idiom: "Not my cup of tea", meaning: "Not my favorite thing" },
  { idiom: "Spend a penny", meaning: "Use the restroom" },
  { idiom: "Take the biscuit", meaning: "Particularly bad or annoying" },
  { idiom: "Put a sock in it", meaning: "Be quiet" },
  { idiom: "On your bike", meaning: "Go away" },
  { idiom: "Codswallop", meaning: "Nonsense" },
  { idiom: "Scrummy", meaning: "A clumsy patch or repair" },
  { idiom: "Barmy", meaning: "Crazy or daft" },
  {
    idiom: "Collywobbles",
    meaning: "Stress-induced stomach pain or queasiness",
  },
  { idiom: "Donkey’s years", meaning: "A long time" },
  { idiom: "Gobby", meaning: "Loud, opinionated, and offensive" },
  { idiom: "Lurgy", meaning: "A contagious but not a serious illness" },
  { idiom: "Blimey", meaning: "An expression of surprise" },
  { idiom: "Gobsmacked", meaning: "Shocked" },
  { idiom: "Kerfuffle", meaning: "A confrontation over differing views" },
  { idiom: "Trainers", meaning: "Athletic shoes" },
  { idiom: "Bagsy", meaning: "Stake a claim" },
  { idiom: "Faff", meaning: "Waste time on something unproductive" },
  { idiom: "Knees up", meaning: " A party" },
  { idiom: "Skive", meaning: "Ditch or leave early" },
];

const backgroundColor = [
  "#3AA6B9",
  "#FFD0D0",
  "#FF9EAA",
  "#F9F9E0",
  "#059212",
  "#06D001",
  "#9BEC00",
  "#F3FF90",
  "#EF9C66",
  "#FCDC94",
  "#C8CFA0",
  "#78ABA8",
  "#FEFFD2",
  "#FFEEA9",
  "#FFBF78",
  "#FF7D29",
  "#FF0000",
  "#FFA27F",
  "#FFE8C5",
  "#97BE5A",
  "#26355D",
  "#AF47D2",
  "#FF8F00",
  "#FFDB00",
  "#6F4E37",
  "#A67B5B",
  "#ECB176",
  "#FED8B1",
  "#8E3E63",
  "#D2649A",
  "#F6FAB9",
  "#CAE6B2",
  "#C40C0C",
  "#FF6500",
  "#FF8A08",
  "#FFC100",
  "#402E7A",
  "#4C3BCF",
  "#4B70F5",
  "#3DC2EC",
  "#F1E5D1",
  "#DBB5B5",
  "#C39898",
  "#987070",
  "#D8EFD3",
  "#95D2B3",
  "#55AD9B",
  "#F1F8E8",
  "#808836",
  "#FFBF00",
  "#FF9A00",
  "#D10363",
  "#FFF9D0",
  "#CAF4FF",
  "#A0DEFF",
  "#5AB2FF",
  "#FF76CE",
  "#FDFFC2",
  "#94FFD8",
  "#A3D8FF",
  "#86469C",
  "#BC7FCD",
  "#FB9AD1",
  "#FFCDEA",
  "#A5DD9B",
  "#C5EBAA",
  "#F6F193",
  "#F2C18D",
  "#B5C0D0",
  "#CCD3CA",
  "#F5E8DD",
  "#EED3D9",
  "#45FFCA",
  "#FEFFAC",
  "#FFB6D9",
  "#D67BFF",
  "#F9F54B",
  "#8BF5FA",
  "#3F979B",
  "#205E61",
  "#567189",
  "#7B8FA1",
  "#CFB997",
  "#FAD6A5",
  "#FFEA20",
  "#8DCBE6",
  "#9DF1DF",
  "#E3F6FF",
];

function randomChoice(backgroundColor) {
  return backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
}

let color = randomChoice(backgroundColor);

function Display(props) {
  const [showMeaning, setShowMeaning] = useState(false);

  function show() {
    setShowMeaning(!showMeaning);
  }

  const [IDIOM, setIDIOM] = useState(
    idiom[Math.floor(Math.random() * idiom.length)]
  );

  return (
    <div
      style={{
        backgroundColor: randomChoice(backgroundColor),
        height: "230px",
      }}
      className="container img"
      id={props.ID}
    >
      <div
        style={{
          height: "170px",
          justifyContent: "center",
          alignContent: "center",
        }}
        onClick={() => props.FUNC(props.ID)}
      >
        <h3 className="anton-regular">
          {showMeaning ? IDIOM.meaning : IDIOM.idiom}
        </h3>
      </div>
      <button className="btn btn-info" onClick={show}>
        <strong className="lobster-regular" style={{ color: "white" }}>
          Meaning
        </strong>
      </button>
    </div>
  );
}

export default Display;
