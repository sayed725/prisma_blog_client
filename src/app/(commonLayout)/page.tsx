

import { Button } from "@/components/ui/button";
import { userServices } from "@/services/user.service";


export default async function Home() {

const {data} = await userServices.getSession()

console.log(data)
  return (
    <div>
      <div>
        <Button>Click me</Button>
      </div>
    </div>
  );
}
