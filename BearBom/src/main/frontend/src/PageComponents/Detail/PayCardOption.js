import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function CardSelect() {
  return (
    <div>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              // src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              // srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label}
            {/* ({option.code}) +{option.phone} */}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="카드를 선택해주세요"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { label: "국민은행" },
  { label: "신한은행" },
  { label: "농협중앙회" },
  { label: "우리은행" },
  //   { code: "RO", label: "Romania", phone: "40" },
  //   { code: "RS", label: "Serbia", phone: "381" },
  //   { code: "RU", label: "Russian Federation", phone: "7" },
  //   { code: "RW", label: "Rwanda", phone: "250" },
  //   { code: "SA", label: "Saudi Arabia", phone: "966" },
  //   { code: "SB", label: "Solomon Islands", phone: "677" },
  //   { code: "SC", label: "Seychelles", phone: "248" },
  //   { code: "SD", label: "Sudan", phone: "249" },
  //   { code: "SE", label: "Sweden", phone: "46" },
  //   { code: "SG", label: "Singapore", phone: "65" },
  //   { code: "SH", label: "Saint Helena", phone: "290" },
  //   { code: "SI", label: "Slovenia", phone: "386" },
  //   { code: "VE", label: "Venezuela", phone: "58" },
  //   { code: "ZM", label: "Zambia", phone: "260" },
  //   { code: "ZW", label: "Zimbabwe", phone: "263" },
];
