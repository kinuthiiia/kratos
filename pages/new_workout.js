import { Button, Input, Timeline, Select, Chip } from "@mantine/core";
import { IconEdit } from "@tabler/icons";
import { Set } from "../components";

export default function NewWorkout() {
  return (
    <div>
      {/* Header */}
      <div>
        <h1>New Workout</h1>
      </div>

      <Timeline active={0} bulletSize={24} lineWidth={2}>
        <Timeline.Item
          bullet={<IconEdit size={12} />}
          title="Name your workout"
        >
          <Input placeholder="My workout title" />
        </Timeline.Item>
        <Timeline.Item bullet={<IconEdit size={12} />} title="Add sets">
          {[1, 2, 3].map((el) => (
            <Set key={el} />
          ))}
          <div>
            <Button>Done</Button>
            <Button>Add Set</Button>
          </div>
        </Timeline.Item>
        <Timeline.Item bullet={<IconEdit size={12} />} title="Add reminder">
          <div className="flex">
            <Select
              data={[
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
              ]}
            />{" "}
            :
            <Select
              data={[
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50",
                "51",
                "52",
                "53",
                "54",
                "55",
                "56",
                "57",
                "58",
                "59",
              ]}
            />
            :
            <Select data={["AM", "PM"]} />{" "}
          </div>
          <div className="flex">
            {[
              { day: 0, date: "M" },
              { day: 1, date: "T" },
              { day: 2, date: "W" },
              { day: 3, date: "T" },
              { day: 4, date: "F" },
              { day: 5, date: "S" },
              { day: 6, date: "S" },
            ].map((day) => (
              <Chip checked={true} onChange={null}>
                {day.date}
              </Chip>
            ))}
          </div>
        </Timeline.Item>
      </Timeline>

      <Button>Save Workout</Button>
    </div>
  );
}
