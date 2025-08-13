import { create } from "zustand";
import { PermissionStatus } from "../../../infrastruture/interfaces/permissions";
import { checkLocationPermission, requestLocationPermission } from "../../../actions/permissions/location";
import { check } from "react-native-permissions";



interface PermissionStore {
  locationStatus: PermissionStatus;
  requestLocationPermission: () => Promise<PermissionStatus>;
  checkLocationPermission?: () => Promise<PermissionStatus>;
}


export const usePermissionStore = create()( set => ({
  locationStatus: 'undetermined',
  requestLocationPermission: async () => {
    const status = await requestLocationPermission();
    set({ locationStatus: status });
    return status;
  },
  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({ locationStatus: status });
    return status;
  }
}));