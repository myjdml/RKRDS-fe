/*
 * @Author: myjdml
 * @Date: 2021-03-10 14:29:43
 * @LastEditors: myjdml
 * @LastEditTime: 2021-03-14 16:44:37
 * @FilePath: /adp-demo/config/defaultSettings.ts
 * @Description: nothing is everything
 */
import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
  logo: string;
};

const proSettings: DefaultSettings = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Redrock',
  logo: '/icons/redrock_black.jpg',
  pwa: false,
  iconfontUrl: ''
};

export type { DefaultSettings };

export default proSettings;
