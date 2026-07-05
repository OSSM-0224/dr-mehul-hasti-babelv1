export const dashboardApi = {
  getStats: async (): Promise<Record<string, any>> => {
    return Promise.resolve({
      activePatients: 12000,
      treatmentsCompleted: 45000,
      satisfactionRate: 99.4,
      experienceYears: 15,
    });
  },
};
