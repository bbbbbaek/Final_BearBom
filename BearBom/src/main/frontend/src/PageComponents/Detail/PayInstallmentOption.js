import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function InstallmentsSelect() {
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
            label="할부 기간을 선택해주세요"
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
  { label: "1개월(무이자)" },
  { label: "2개월(무이자)" },
  { label: "3개월(무이자)" },
  { label: "4개월(무이자)" },
  { label: "5개월(무이자)" },
  { label: "6개월" },
  { label: "7개월" },
  { label: "8개월" },
  { label: "9개월" },
  { label: "10개월" },
  { label: "11개월" },
  { label: "12개월" },
];
