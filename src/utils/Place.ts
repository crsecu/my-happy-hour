// This interface defines the structure of each object that is returned by the API
export interface Place {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: string | null;
  latitude: string | null;
  phone: string;
  website_url: string;
  state: string;
  street: string;
}

export const defaultPlace: Place = {
  id: "",
  name: "",
  brewery_type: "",
  address_1: "",
  address_2: null,
  address_3: null,
  city: "",
  state_province: "",
  postal_code: "",
  country: "",
  longitude: null,
  latitude: null,
  phone: "",
  website_url: "",
  state: "",
  street: "",
};
