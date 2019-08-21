/**
 * mock数据服务器模块，用于暴露mock接口，返回数据
 */
import Mock from 'mockjs';
import category from './category.json';
import homeData from './homeData.json';
import mockNav from './headerData.json'


Mock.mock('/home', {code: 0, data: homeData});
Mock.mock('/aaa', {code: 0, data: mockNav});


Mock.mock('/categoryList', {code: 0, data: category});
