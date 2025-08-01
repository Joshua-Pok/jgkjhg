'use client';

import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/Header/Header';
import AppContent from './components/Content';
import SideBar from './components/SIdeBar/SideBar';
import "./globals.scss"
import VehicleProvider from './components/Provider/VehicleProvider';

const { Header: AntHeader, Sider, Content: AntContent } = Layout;

const layoutStyle = {
  width: '100%',
  height: '100%',
};

export default function App() {
  return (
    <Layout>
      <Sider>
        <SideBar />
      </Sider>
      <Layout>
        <AntHeader>
          <AppHeader/>
        </AntHeader>
        <VehicleProvider>
        <AntContent>
          <AppContent />
        </AntContent>
        </VehicleProvider>
      </Layout>
    </Layout>
  );
}
