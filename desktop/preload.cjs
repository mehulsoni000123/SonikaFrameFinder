const { contextBridge, ipcRenderer } = require('electron');
const methods=['state','addBoard','save','remove','importFile','importImage','open','exportData','importData','settings','search','analyze','cancel','companion'];
contextBridge.exposeInMainWorld('sonika',Object.fromEntries(methods.map(name=>[name,(arg)=>ipcRenderer.invoke(`sf:${name}`,arg)])));
