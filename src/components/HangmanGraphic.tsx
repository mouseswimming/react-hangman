const HEAD = (
  <div
    className="w-[80px] aspect-square rounded-full border-[10px] border-black absolute top-[50px] -right-[35px]"
    key="head"
  />
);

const BODY = (
  <div
    className="w-[10px] h-[100px] bg-black absolute top-[120px] right-0"
    key="body"
  />
);

const RIGHT_ARM = (
  <div
    className="w-[100px] h-[10px] bg-black absolute top-[150px] -right-[100px] -rotate-[30deg] origin-bottom-left"
    key="right-arm"
  />
);

const LEFT_ARM = (
  <div
    className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[10px] rotate-[30deg] origin-bottom-right"
    key="left-arm"
  />
);

const RIGHT_LEG = (
  <div
    className="w-[100px] h-[10px] bg-black absolute top-[210px] -right-[90px] rotate-[60deg] origin-bottom-left"
    key="right-lef"
  />
);

const LEFT_LEG = (
  <div
    className="w-[100px] h-[10px] bg-black absolute top-[210px] right-0 -rotate-[60deg] origin-bottom-right"
    key="left-leg"
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanGraphicProps = {
  numberOfGuesses: number;
};

export function HangmanGraphic({ numberOfGuesses }: HangmanGraphicProps) {
  return (
    <div className="flex justify-start max-lg:justify-center max-md:hidden h-full">
      <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
        <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
        <div className="max-lg:h-[30vh] h-full w-[10px] bg-black ml-[120px]" />
        <div className="h-[10px] w-[250px] bg-black" />
      </div>
    </div>
  );
}
