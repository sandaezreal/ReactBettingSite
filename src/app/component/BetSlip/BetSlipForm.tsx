
import { Label, TextInput } from "flowbite-react";
import { CiMoneyBill } from "react-icons/ci";
import { Button } from "flowbite-react";
import { useRef, useState } from "react";

export default function BetSlipForm() {
const [multiplier ] = useState<number>(1.69);
const [totalPayout, setTotalPayout] = useState<number>(0);
const handleChangeInput = (e : any) => {
    const { value } = e.target;
    const payout : number  = Math.round((value * multiplier) * 100) / 100;
    setTotalPayout(payout);
};
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="email4" value="Shopify Rebliion vs Talon Esports" />
      </div>
      <div className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-600">
              Shopify Rebillion
            </p>
            <p className="text-sm font-semibold leading-6 text-gray-600">
              Talon Esports
            </p>
          </div> 
        </div>
        <div className="flex min-w-0 gap-x-4">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <p className="text-sm font-semibold leading-6 text-gray-600">
               {multiplier}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-x-6">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <TextInput
              id="Bet"
              type="number"
              icon={CiMoneyBill}
              placeholder="0.0"
              onChange={handleChangeInput}
              required
            />
          </div>
        </div>
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-600">
              Payout
            </p>
            <p className="text-sm font-semibold leading-6 text-gray-600">
              ₱ {totalPayout}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}