import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Upload,
  FileText,
  Image,
  Trash2,
  Download,
  LogOut,
  Plus,
  Edit,
  Save,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PDFGuide {
  id: string;
  title: string;
  description: string;
  price: number;
  fileUrl?: string;
  fileName?: string;
}

interface BackgroundImage {
  section: string;
  imageUrl: string;
  fileName: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [pdfGuides, setPdfGuides] = useState<PDFGuide[]>([]);
  const [backgroundImages, setBackgroundImages] = useState<BackgroundImage[]>(
    [],
  );
  const [newGuide, setNewGuide] = useState<PDFGuide>({
    id: "",
    title: "",
    description: "",
    price: 0,
  });

  useEffect(() => {
    // Check admin authentication
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    }

    // Load existing data from localStorage
    const savedGuides = localStorage.getItem("pdfGuides");
    const savedBgImages = localStorage.getItem("backgroundImages");

    if (savedGuides) {
      setPdfGuides(JSON.parse(savedGuides));
    }
    if (savedBgImages) {
      setBackgroundImages(JSON.parse(savedBgImages));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  const handleFileUpload = (
    file: File,
    type: "pdf" | "image",
    section?: string,
  ) => {
    // In a real app, upload to cloud storage
    const fileUrl = URL.createObjectURL(file);

    if (type === "pdf") {
      const updatedGuide = {
        ...newGuide,
        id: Date.now().toString(),
        fileUrl,
        fileName: file.name,
      };

      const updatedGuides = [...pdfGuides, updatedGuide];
      setPdfGuides(updatedGuides);
      localStorage.setItem("pdfGuides", JSON.stringify(updatedGuides));

      // Reset form
      setNewGuide({ id: "", title: "", description: "", price: 0 });
    } else if (type === "image" && section) {
      const newBgImage: BackgroundImage = {
        section,
        imageUrl: fileUrl,
        fileName: file.name,
      };

      const updatedImages = backgroundImages.filter(
        (img) => img.section !== section,
      );
      updatedImages.push(newBgImage);
      setBackgroundImages(updatedImages);
      localStorage.setItem("backgroundImages", JSON.stringify(updatedImages));
    }
  };

  const deletePDFGuide = (id: string) => {
    const updatedGuides = pdfGuides.filter((guide) => guide.id !== id);
    setPdfGuides(updatedGuides);
    localStorage.setItem("pdfGuides", JSON.stringify(updatedGuides));
  };

  const deleteBackgroundImage = (section: string) => {
    const updatedImages = backgroundImages.filter(
      (img) => img.section !== section,
    );
    setBackgroundImages(updatedImages);
    localStorage.setItem("backgroundImages", JSON.stringify(updatedImages));
  };

  const sections = [
    { id: "hero", name: "Главная секция" },
    { id: "services", name: "Услуги" },
    { id: "pricing", name: "Цены" },
    { id: "benefits", name: "Преимущества" },
    { id: "testimonials", name: "Отзывы" },
    { id: "cta", name: "Призыв к действию" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-mindful-gradient rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Админ панель
              </span>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="pdf-guides" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pdf-guides">PDF Гайды</TabsTrigger>
            <TabsTrigger value="backgrounds">Фоновые изображения</TabsTrigger>
          </TabsList>

          {/* PDF Guides Management */}
          <TabsContent value="pdf-guides" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Добавить новый PDF гайд
                </CardTitle>
                <CardDescription>
                  Загрузите PDF файл и добавьте описание для продажи
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Название гайда</Label>
                    <Input
                      id="title"
                      value={newGuide.title}
                      onChange={(e) =>
                        setNewGuide({ ...newGuide, title: e.target.value })
                      }
                      placeholder="Например: Как выйти из депрессии"
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Цена (AZN)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={newGuide.price || ""}
                      onChange={(e) =>
                        setNewGuide({
                          ...newGuide,
                          price: parseFloat(e.target.value) || 0,
                        })
                      }
                      placeholder="10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Описание</Label>
                  <Textarea
                    id="description"
                    value={newGuide.description}
                    onChange={(e) =>
                      setNewGuide({ ...newGuide, description: e.target.value })
                    }
                    placeholder="Краткое описание содержания гайда..."
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="pdf-file">PDF файл</Label>
                  <Input
                    id="pdf-file"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && newGuide.title && newGuide.price > 0) {
                        handleFileUpload(file, "pdf");
                      } else {
                        alert(
                          "Пожалуйста, заполните все поля перед загрузкой файла",
                        );
                      }
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Existing PDF Guides */}
            <Card>
              <CardHeader>
                <CardTitle>Существующие PDF гайды</CardTitle>
              </CardHeader>
              <CardContent>
                {pdfGuides.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    Пока нет загруженных гайдов
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pdfGuides.map((guide) => (
                      <Card key={guide.id} className="border-2">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">
                            {guide.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {guide.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center mb-3">
                            <span className="font-bold text-lg text-mindful-600">
                              {guide.price} AZN
                            </span>
                            {guide.fileName && (
                              <span className="text-xs text-gray-500">
                                {guide.fileName}
                              </span>
                            )}
                          </div>
                          <div className="flex gap-2">
                            {guide.fileUrl && (
                              <Button size="sm" variant="outline" asChild>
                                <a
                                  href={guide.fileUrl}
                                  download={guide.fileName}
                                >
                                  <Download className="w-4 h-4 mr-1" />
                                  Скачать
                                </a>
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => deletePDFGuide(guide.id)}
                            >
                              <Trash2 className="w-4 h-4 mr-1" />
                              Удалить
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Background Images Management */}
          <TabsContent value="backgrounds" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Image className="w-5 h-5 mr-2" />
                  Управление фоновыми изображениями
                </CardTitle>
                <CardDescription>
                  Загрузите фоновые изображения для различных секций сайта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sections.map((section) => {
                    const existingImage = backgroundImages.find(
                      (img) => img.section === section.id,
                    );

                    return (
                      <Card key={section.id} className="border-2">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">
                            {section.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          {existingImage ? (
                            <div className="space-y-3">
                              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                  src={existingImage.imageUrl}
                                  alt={section.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <p className="text-xs text-gray-500">
                                {existingImage.fileName}
                              </p>
                              <Button
                                size="sm"
                                variant="destructive"
                                className="w-full"
                                onClick={() =>
                                  deleteBackgroundImage(section.id)
                                }
                              >
                                <Trash2 className="w-4 h-4 mr-1" />
                                Удалить
                              </Button>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                                <Upload className="w-8 h-8 text-gray-400" />
                              </div>
                              <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    handleFileUpload(file, "image", section.id);
                                  }
                                }}
                              />
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
