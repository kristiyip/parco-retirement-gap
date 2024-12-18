import { Button, Card } from "@mui/material";
import ParcoPlusAltruist from "../logos/ParcoPlusAltruist";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import '../AltruistOpenRoth.css'
import { useContext } from "react";
import { AltruistOpenRothContext, AltruistOpenRothType } from "../AltruistOpenRothContext";

export default function StartCard() {
  const { setCurrModalCard } = useContext(AltruistOpenRothContext) as AltruistOpenRothType

  return (
    <Card
      sx={{
        padding: '80px 120px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '400px',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div>
        <ParcoPlusAltruist />
      </div>
      <div className="primaryText">
        PARCO uses Altruist to open a Roth IRA
      </div>
      <div className="detailText">
        A Roth IRA is a smart way to prepare for a comfortable retirement. With tax-free growth and withdrawals, your savings can go further.
      </div>
      <div className="iconWithText">
        <CheckCircleIcon className="icon" fontSize="small"/>
        <div>
          You’ll get verified in less than a minute
        </div>
      </div>
      <div className="iconWithText">
        <SettingsIcon className="icon" fontSize="small"/>
        <div>
          Remove this connection any time in your account Settings
        </div>
      </div>
      <Button
        sx={{
          borderRadius: '6px',
          background: '#344767',
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '27px',
          marginTop: '40px',
          padding: '16px 40px'
        }}
        onClick={() => setCurrModalCard((prev: number) => prev + 1)}
      >
        START
      </Button>
    </Card>
  )
}