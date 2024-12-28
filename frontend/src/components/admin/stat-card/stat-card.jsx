import { Card, CardBody } from "@nextui-org/react";

const StatCard = ({ title, value, icon: Icon }) => {
  return (
    <Card className="bg-gray-900 text-white h-24">
      <CardBody className="flex flex-row items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <Icon className="w-5 h-5 text-gray-400" />
      </CardBody>
    </Card>
  );
};

export default StatCard;
