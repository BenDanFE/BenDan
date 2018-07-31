<template>
    <div class="bd-sign">
        <Row>
            <Col span="24">
            <div class="bd-sign-main">
                <Card dis-hover class="bd-sign-content">
                    <p slot="title">登录 Bendan 博客</p>
                    <div>
                        <Form label-position="top">
                            <FormItem label="电子邮件">
                                <Input prefix="ios-mail-outline"></Input>
                            </FormItem>
                            <FormItem label="密码">
                                <Input type="password" prefix="ios-lock-outline"></Input>
                            </FormItem>
                            <FormItem label="用户名（昵称，不能修改）">
                                <Input type="password" prefix="ios-lock-outline"></Input>
                            </FormItem>
                            <div class="bd-sign-main-aside-tip">
                                <Button type="success" long>注册</Button>
                            </div>
                            <div class="bd-sign-main-aside-tip">
                                注册即表示您同意我们的 <a>服务条款与隐私政策</a>
                                <p>已经拥有账户？<a>登录</a></p>
                            </div>
                        </Form>
                    </div>
                </Card>
            </div>
            </Col>
        </Row>
    </div>
</template>

<script lang="ts">
    export default {
    }
</script>

<style scoped lang="less">
    .bd-sign {
        background: url(../../assets/bg.svg) repeat-x;
        background-size: contain;
        height: 100vh;
        padding-top: 70px;
    }
    .bd-sign-main {
        width: 450px;
        margin: 50px auto;
        padding: 0 16px;
    }
    .bd-sign-content {
        padding: 0 16px;
    }
    .bd-sign-main-aside-tip {
        text-align: center;
        margin: 32px 0 16px;
    }
</style>