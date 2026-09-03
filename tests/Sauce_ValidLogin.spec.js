import {test,expect}from '@playwright/test';
import { sauce_POM } from '../page/sauce_POM';


test('test',async({page}) => {

    const login = new sauce_POM(page)

    await login.gotologinpage()
    await login.login('visual_user','secret_sauce')
});