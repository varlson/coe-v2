import React from "react";

type LabPropType = {
  name: string;
  src: string;
  text: string;
};

function LabCard({ name, src, text }: LabPropType) {
  return (
    <div>
      <p className="title2">{name}</p>

      <div className="my-1">
        {text.split("&").map((paragraph, index) => (
          <p className="my-2 text-justify" key={index}>
            {paragraph.includes("<") ? (
              <div>
                <p className="title3">{paragraph.split("<")[0]}</p>
                <ul className="mt-2">
                  {paragraph
                    .split("<")[1]
                    .split(";")
                    .map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                </ul>
              </div>
            ) : (
              <p className="text-justify">{paragraph}</p>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}

export default LabCard;
