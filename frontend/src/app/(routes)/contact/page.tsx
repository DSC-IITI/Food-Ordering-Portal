import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import { MapPin,Mail, Phone, Home, User, Bus, Car } from "lucide-react"
const webDevTeam = [
    { name: "Prince Kumar", role: "Backend Developer",email: "prince@gmail.com" },
    { name: "Sameer Choudhary", role: "Frontend Developer",email: "cse230001070@iiti.ac.in" }
  ]

  export default function Page() {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-200 p-8">
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-orange-600 mb-4">About the Platform</h3>
          <p className="text-center text-gray-700 font-lg max-w-2xl mx-auto">
            IITI Foodie is an innovative food portal project developed under the Google Developer Student Clubs (GDSC) of IIT Indore. This platform was created by a talented team of 2nd year undergraduate B.Tech students, showcasing their skills in web development and their passion for enhancing campus dining experiences.
          </p>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center text-orange-500">Website Development Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {webDevTeam.map((member, index) => (
              <Card key={index} className="bg-gray-700 text-center transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-orange-500">
                 
                    <AvatarFallback className="bg-orange-500 text-white text-xl">{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold mb-1 text-white">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Mail className="w-4 h-4 mr-2 text-orange-500" />
                    {member.email}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    )
  }