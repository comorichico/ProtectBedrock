import { world } from "@minecraft/server";

world.events.blockBreak.subscribe(ev => {  
  const id = ev.brokenBlockPermutation.type.id;
  const dimension = ev.dimension;
  dimension.runCommandAsync(`say ${ev.player.name}が${id}を壊しました`);
});