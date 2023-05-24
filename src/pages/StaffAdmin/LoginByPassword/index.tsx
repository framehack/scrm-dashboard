import { Input, Button, Space, message } from 'antd';
import React, { useEffect } from 'react';
import type { CommonResp } from '@/services/common';

import styles from './index.less';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
// @ts-ignore
import { StaffAdminPasswordLogin, StaffAdminForceLogin } from '@/services/staffAdmin';

const PasswordLogin: React.FC = () => {
  useEffect(() => {
    message.info("演示环境无需扫码登录，3秒后自动登录", 3000);
    setTimeout(() => {
      StaffAdminForceLogin().then((res: CommonResp) => {
        if (res.code !== 0) {
          message.error(res.message)
          return;
        }

        window.location.href = `http://${window.location.hostname}:9000/staff-admin/welcome`;
      }).catch((err) => {
        message.error("自动登录失败")
        console.log("err", err)
      })
    }, 3000);
  })
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Title
          level={1}
          className={styles.title}
          style={{ fontWeight: 500, fontSize: '28px', marginBottom: '8px' }}
        >
          用户登录
        </Title>
        <Paragraph className={styles.desc}>安全，强大，易开发的开源企业微信SCRM</Paragraph>
      </div>


      <div id="qrcodeContainer" className={styles.qrcodeContainer}>
        <Space direction="vertical">
          <Input placeholder="userid" />
          <Input.Password placeholder="password" />
          <Button>login</Button>
        </Space>
      </div>
    </div>
  );
};

export default PasswordLogin;
