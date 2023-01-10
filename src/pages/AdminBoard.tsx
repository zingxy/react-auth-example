import { Card, Row, Col, Statistic } from 'antd';

import { CheckIcon } from '@heroicons/react/24/outline';

import { Typography } from 'antd';
import React from 'react';
const { Text } = Typography;

function CheckEvent({
  title,
  Icon = CheckIcon,
  color = 'black',
}: {
  color?: string;
  title: string;
  Icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}) {
  return (
    <div className="flex items-center">
      <Icon
        className="h-8 w-8 "
        style={{
          color,
        }}
      />
      <span className="ml-4 font-bold">{title}</span>
    </div>
  );
}

export default function AdminBoard() {
  const tabList = [
    {
      key: 'Activity',
      tab: 'Activity',
    },
    {
      key: 'Clicks',
      tab: 'Clicks',
    },
    {
      key: 'Status',
      tab: 'Status',
    },
  ];
  return (
    <>
      <Row gutter={32}>
        <Col span={10}>
          <Card
            title="Performance"
            className=" h-full w-full "
            bordered={false}
            style={{
              boxShadow:
                'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            }}
          >
            <Row
              gutter={16}
              justify="center"
              align="middle"
            >
              <Col
                span={12}
                flex=""
              >
                <Statistic
                  title="InCome"
                  value={88}
                  suffix="%"
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="InCome"
                  value={88}
                  suffix="%"
                />
              </Col>
            </Row>
            <section>
              <CheckEvent
                title="React"
                color="red"
              />
              <CheckEvent
                title="Vue"
                color="pink"
              />
              <CheckEvent
                title="Vite"
                color="green"
              />
              <CheckEvent
                title="Express"
                color="green"
              />
              <CheckEvent
                title="MongoDB"
                color="green"
              />
            </section>
          </Card>
        </Col>
        <Col
          span={14}
          className=""
        >
          <Card
            tabList={tabList}
            className="h-full w-full"
            defaultActiveTabKey="Status"
            style={{
              boxShadow:
                'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            }}
          ></Card>
        </Col>
      </Row>
      <Row className="mt-8 h-[25vh]">
        <Col span={24}>
          <Card
            title="Admin"
            className="h-full w-full"
            style={{
              boxShadow:
                'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            }}
          ></Card>
        </Col>
      </Row>
    </>
  );
}
