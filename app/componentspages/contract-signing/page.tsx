"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Upload,
  FileText,
  Users,
  CheckCircle2,
  Info,
  Lock,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [fileName, setFileName] = useState<string>("");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-gray-900">Digital Contract Signing</h1>
            <p className="text-gray-600">Securely sign and manage your legal documents</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Document Upload Section */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Document Upload</h2>
              </div>
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <div className="space-y-2">
                  <p className="text-gray-600">Drag and drop your document here, or</p>
                  <Button variant="secondary">
                    Choose File
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                    />
                  </Button>
                  {fileName && (
                    <p className="text-sm text-gray-600 mt-2">Selected: {fileName}</p>
                  )}
                </div>
              </div>
            </Card>

            {/* Document Preview */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold">Document Preview</h2>
                </div>
                <Button variant="outline" size="sm">
                  Download PDF
                </Button>
              </div>
              <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
                <p className="text-gray-500">Preview will appear here</p>
              </div>
            </Card>

            {/* Signature Area */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Signature Area</h2>
              </div>
              <Tabs defaultValue="draw" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="draw">Draw</TabsTrigger>
                  <TabsTrigger value="type">Type</TabsTrigger>
                  <TabsTrigger value="upload">Upload</TabsTrigger>
                </TabsList>
                <TabsContent value="draw">
                  <div className="border-2 rounded-lg h-40 flex items-center justify-center">
                    <p className="text-gray-500">Draw your signature here</p>
                  </div>
                </TabsContent>
                <TabsContent value="type">
                  <Input placeholder="Type your full name" />
                </TabsContent>
                <TabsContent value="upload">
                  <Button variant="outline" className="w-full">
                    Upload Signature Image
                  </Button>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Signing Progress */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Signing Progress</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Document Uploaded</p>
                    <p className="text-sm text-gray-500">Step 1 of 3</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Review Document</p>
                    <p className="text-sm text-gray-500">Step 2 of 3</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Sign Document</p>
                    <p className="text-sm text-gray-500">Step 3 of 3</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Security Information */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Security</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">256-bit Encryption</p>
                    <p className="text-sm text-gray-500">Your documents are secure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">Legal Compliance</p>
                    <p className="text-sm text-gray-500">E-Sign Act compliant</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Audit Trail</p>
                    <p className="text-sm text-gray-500">Complete signing history</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                Sign Document
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Save as Draft
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}