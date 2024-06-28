<?php
// app/Http/Controllers/TarefasController.php
namespace App\Http\Controllers;

use App\Models\Tarefas;
use Illuminate\Http\Request;

class TarefasController extends Controller
{
    public function index()
    {
        return response()->json(Tarefas::all(), 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'is_suggestion' => 'boolean',
        ]);

        $task = Tarefas::create([
            'name' => $request->name,
            'is_suggestion' => $request->is_suggestion ?? false,
        ]);

        return response()->json($task, 201);
    }

    public function destroy($id)
    {
        $task = Tarefas::findOrFail($id);
        $task->delete();

        return response()->json(null, 204);
    }

    public function complete(Request $request, $id)
    {
        $task = Tarefas::findOrFail($id);
        $task->completed = true;
        $task->save();

        return response()->json($task, 200);
    }

    public function undoComplete(Request $request, $id)
    {
        $task = Tarefas::findOrFail($id);
        $task->completed = false;
        $task->save();

        return response()->json($task, 200);
    }

    public function statistics()
    {
        $tasks = Tarefas::all();

        $totalTasks = $tasks->count();
        $completedTasks = $tasks->where('completed', true)->count();
        $totalNonSuggestionTasks = $tasks->where('is_suggestion', false)->count();
        $completedNonSuggestionTasks = $tasks->where('is_suggestion', false)->where('completed', true)->count();
        $suggestions = $tasks->where('is_suggestion', true);
        $completedSuggestions = $suggestions->where('completed', true)->count();
        $progress = $totalTasks > 0 ? ($completedTasks / $totalTasks) * 100 : 0;

        return response()->json([
            'total_tasks' => $totalNonSuggestionTasks,
            'completed_tasks' => $completedNonSuggestionTasks,
            'total_suggestions' => $suggestions->count(),
            'completed_suggestions' => $completedSuggestions,
            'progress' => $progress,
        ]);
    }
}
