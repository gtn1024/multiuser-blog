import React from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {SignInForm} from "@/pages/login-page/SignInForm.tsx";
import {SignUpForm} from "@/pages/login-page/SignUpForm.tsx";

export const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <Tabs defaultValue="sign_in" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="sign_in">登录</TabsTrigger>
          <TabsTrigger value="sign_up">注册</TabsTrigger>
        </TabsList>
        <TabsContent value="sign_in">
          <SignInForm />
        </TabsContent>
        <TabsContent value="sign_up">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};