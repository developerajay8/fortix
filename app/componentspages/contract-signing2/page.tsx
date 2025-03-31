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
  Download,
  Clock,
  UserPlus,
  History,
  Eye,
  Settings,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [fileName, setFileName] = useState<string>("");
  const [showTemplates, setShowTemplates] = useState(false);

  const templates = [
    { id: 1, name: "Non-Disclosure Agreement", type: "Business" },
    { id: 2, name: "Employment Contract", type: "HR" },
    { id: 3, name: "Service Agreement", type: "Business" },
    { id: 4, name: "Rental Agreement", type: "Real Estate" },
  ];

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
            {/* Template Selection */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold">Choose Template</h2>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTemplates(!showTemplates)}
                >
                  Browse Templates
                </Button>
              </div>
              {showTemplates && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {templates.map((template) => (
                    <div
                      key={template.id}
                      className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{template.name}</h3>
                          <p className="text-sm text-gray-500">{template.type}</p>
                        </div>
                        <Download className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Document Upload Section */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Upload className="w-5 h-5 text-blue-600" />
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
                  <div className="text-sm text-gray-500 mt-4">
                    Supported formats: PDF, DOC, DOCX (Max size: 10MB)
                  </div>
                </div>
              </div>
            </Card>

            {/* Document Preview */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold">Document Preview</h2>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </div>
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
                  <div className="space-y-4">
                    <div className="border-2 rounded-lg h-40 flex items-center justify-center">
                      <p className="text-gray-500">Draw your signature here</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">Clear</Button>
                      <Button size="sm">Save Signature</Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="type">
                  <div className="space-y-4">
                    <Input placeholder="Type your full name" />
                    <div className="grid grid-cols-3 gap-4">
                      <Button variant="outline" size="sm">Style 1</Button>
                      <Button variant="outline" size="sm">Style 2</Button>
                      <Button variant="outline" size="sm">Style 3</Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="upload">
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">
                      Upload Signature Image
                    </Button>
                    <p className="text-sm text-gray-500">
                      Supported formats: PNG, JPG (transparent background preferred)
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            {/* Additional Signers */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <UserPlus className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Additional Signers</h2>
              </div>
              <div className="space-y-4">
                <Input placeholder="Enter email address" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">Set signing deadline</span>
                  </div>
                  <Button variant="outline" size="sm">Add Signer</Button>
                </div>
              </div>
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
                    <p className="text-sm text-gray-500">Step 1 of 4</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Review Document</p>
                    <p className="text-sm text-gray-500">Step 2 of 4</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Add Signers</p>
                    <p className="text-sm text-gray-500">Step 3 of 4</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
                    4
                  </div>
                  <div>
                    <p className="font-medium">Complete Signing</p>
                    <p className="text-sm text-gray-500">Step 4 of 4</p>
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
                    <p className="text-sm text-gray-500">Bank-level security for your documents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">Legal Compliance</p>
                    <p className="text-sm text-gray-500">E-Sign Act compliant signatures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <History className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Audit Trail</p>
                    <p className="text-sm text-gray-500">Detailed activity logging</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <p className="font-medium">Tamper Detection</p>
                    <p className="text-sm text-gray-500">Document integrity verification</p>
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